---
title: Run Stable Diffusion in Azure
description: Hardware requirement are pretty challenging for most of the machine learning needs, stable diffusion is no different. I've an Azure subscription can I make use of that?
published: true
publishedAt: 2023-01-16T00:00:00.000Z
updatedAt: 2023-01-16T00:00:00.000Z
category: tech
image: 'banners/69'
keywords: 
    - azure
    - stable-diffusion
    - machine-learning
authors:
  - Krishna Mohan A M
---

Hardware requirement are pretty challenging for most of the machine learning needs, stable diffusion is no different. Most of the SaaS offerings' pricing (Dreamstudio, Midjourney) depends on the number of images generated. My intention was totally different than just generating cool images, I want to play around with it and learn how it works. 

But wait, I've an Azure subscription. Can I make use of that? I googled around and found a [very informative blog](https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/) to spin-off an Azure ML instance to run SD. I followed most of that blog with some tweaks for my needs. If you prefer to follow the original reference please do so.

## Prerequisites
- Install [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) and its [ML extension](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-configure-cli?tabs=public)
- Login to Azure from CLI and set the default subscription.
    ```powershell
    # Log in with your Azure account. This will open webpage, login with your credentials.
    az login

    # List your available subscriptions. Check IsDefault flag to know which one is default
    az account list --output table

    # Set your default subscription. 
    az account set --subscription "<your-subscription-id>"
   ```
- Get a [Hugging Face User Access Token](https://huggingface.co/docs/hub/security-tokens#how-to-use-user-access-tokens). This is required to download models.

## Setup Azure ML instance
- Create a resource group. I chose `eastus` due to its low cost compared to other regions.
    ```powershell
    az group create --name "rg-stable-diffusion" --location "eastus"
    ```
- Create an ML workspace - you’ll need this to do anything ML-related in Azure.
    ```powershell
    az ml workspace create -n "ml-stable-diffusion" -g "rg-stable-diffusion"
    ```
- This step is mildly complex and varies depends on your subscription. I had a Visual Studio Subscription and some of the higher compute instances are forbidden in that. 
    ```powershell
    # Command to list compute instances with GPU
    az ml compute list-sizes -l eastus -w "ml-stable-diffusion" -g "rg-stable-diffusion" --output table --query "[?gpus > ``0``, v_cp_us > ``0``].{Name:name, Gpus:gpus, vCPU:v_cp_us}"
    ```
  - Open an new `YAML` file, say `compute.yaml`, with the details below. I tried with `Standard_NC6s_v3` firt, but due to my subscriptions limit, I had to switch to `Standard_NV6`. Refer the [pricing details](https://azure.microsoft.com/en-us/pricing/details/machine-learning/#NV-series) for better understanding.
      ```yaml
      $schema: https://azuremlschemas.azureedge.net/latest/computeInstance.schema.json 

      # this name is globally unique, please choose a different name
      name: ksd-tin-tin
      type: computeinstance

      #
      size: Standard_NV6
      idle_time_before_shutdown_minutes: 15
      ```
  - Run the CLI command to create instance. This will take couple of minutes. Once done you can check the status in [Azure ML Studio](https://ml.azure.com/) or in CLI. 
      ```powershell
      az ml compute create -f compute.yml -w "ml-stable-diffusion" -g "rg-stable-diffusion"
      ```
## Setup Stable Diffusion Web UI 
Multiple WebUIs are available like [sygil-webui](https://github.com/Sygil-Dev/sygil-webui), [stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and [InvokeAI](https://github.com/invoke-ai/InvokeAI). Here we'll be using `stable-diffusion-webui`.

- Make sure your compute instance is running, then click its `Terminal` link to start a new terminal session.
- Clone the `AUTOMATIC1111/stable-diffusion-webui` repo.
    ```powershell
    # Clone the SD WebUI
    git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git

    # Go to the models folder
    cd stable-diffusion-webui/models/Stable-diffusion/
    ```
- Download SD2.1 model from Hugging Face.
    ```powershell
    # Download the x768 model, specifically the safetensors versions for increased security and loading speed
    curl -H "Authorization: Bearer <your-huggingface-token>" https://huggingface.co/stabilityai/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned.safetensors --location --output v2-1_768-ema-pruned.safetensors

    # and its config as well
    curl https://raw.githubusercontent.com/Stability-AI/stablediffusion/main/configs/stable-diffusion/v2-inference-v.yaml --output v2-1_768-ema-pruned.yaml
    ```
- Install web ui's dependencies. This will take few minutes to complete.
    ```powershell
    # Create a new Conda env with the desired Python version
    conda create -n a1111-sdwebui python=3.10 -y

    # Activate the new env
    conda activate a1111-sdwebui

    # Go back to the root of the repo..
    cd ../..

    # ..so we can install the repository's dependencies..
    pip install -r requirements_versions.txt 

    # ..which for some reason won't install everything leading to the web ui crashing 
    # while complaining about `undefined symbol: cublasLtGetStatusString, version libcublasLt.so.11`
    # So, we need to install the missing dependencies directly from conda
    conda install pytorch=1.13 torchvision=0.14 torchaudio=0.13 pytorch-cuda=11.7 -c pytorch -c nvidia -y


    # If you want/need an older version, see the alternatives here https://pytorch.org/get-started/previous-versions/
    # e.g. I've had success with 
    # conda install pytorch==1.12.1 torchvision==0.13.1 torchaudio==0.12.1 cudatoolkit=11.3 -c pytorch -y

    # Mark everything as a safe directory,
    # we need this because when first run,
    # the web ui will try to clone some repos under this directory, 
    # and we'll get a lot of dubious ownership errors,
    # which we don't really want to be honest
    git config --global --add safe.directory '*'
    ```
- Launch the web UI. This will also take couple of minutes as it requires some extra dependencies to start. If you don't provide username/password, someone will [use your sytem](https://www.reddit.com/r/StableDiffusion/comments/y52yt0/why_are_there_images_i_never_generated_in_my/) via open gradio share.
    ```powershell
    accelerate launch --mixed_precision=fp16 --num_cpu_threads_per_process=6 launch.py --precision full --no-half --share --gradio-auth <user>:<pass>
    ```
## Run it again

Next time you want run SD, just run the follwoing commands.
```powershell
# Activate the new env
conda activate a1111-sdwebui

# Launc
accelerate launch --mixed_precision=fp16 --num_cpu_threads_per_process=6 launch.py --precision full --no-half --share --gradio-auth <user>:<pass>
```

## Wrap Up

We can do a lot of improvements on top of it, like running image generation [faster](https://github.com/facebookresearch/xformers) or installing extensions. It's up to you to further explore the same.
