class Photo {
    constructor(sourceImage) {
        this.image = sourceImage;
    }
    displayImage() {
        console.log(this.image);
    }
    saveImage() {
        let result = this.compressImage();
        result.toDataURL('image/jpeg', 1);
        result.toBlob(
            blob => {
                console.log(blob);
            },
            'image/jpeg',
            1
        );
        console.log(result);
    }
    compressImage() {
        let canvas = document.createElement('canvas');
        canvas.width = this.image.width;
        canvas.height = this.image.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(this.image, 0, 0);
        // console.log(this.image.width);
        // console.log(this.image.height);
        // console.log(canvas);
        return canvas;
    }
}

export default Photo;
