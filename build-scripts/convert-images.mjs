import imagemin from 'imagemin';
import webp from 'imagemin-webp';    // imagemin's WebP plugin.
import fs from 'fs';

const 
    outputFolder = "./public/banners",            // Output folder
    images = './public/banners/*.{jpeg,jpg,png,PNG}';        // PNG & JPEG images



(async () => {
    if(fs.existsSync(outputFolder)) {
        await imagemin([images], {
            destination: outputFolder,
            plugins: [
                webp({ quality: 50 })
            ]
        });
        console.log('Images optimized.');
    } else {
        console.log('Output folder not found');
    }    
})();
