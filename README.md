# Image Pixelizer :robot:

Pixelize images from the command line.

## Disclaimer

This tool is not intended to be a production-level application, It is missing parts that you would normally see in those cases.

## Quick Start

Once you have [node](https://nodejs.org/en/) installed and the repo cloned on your computer, follow these steps:

1. Install dependencies.

```
npm install
```

2. Build it!

```
npm run build
```

3. Before running the app, drop any images you want to pixelize into the `images` directory.

4. Run it!

```
npm run start
```

The program will guide you from there. Unless you need to rebuild the project, you can just use `npm run start` from now on.

## Q and A

**Q: Why are all the pixelized images put into the `pixelated` directory?**

A: So they can be easily gitignored.

**Q: Which image formats are supported?**

A: The application supports the same image formats that [sharp](https://sharp.pixelplumbing.com/#formats) does.

**Q: How does it work?**

A: All it does is make use sharp's [png](https://sharp.pixelplumbing.com/api-output#png) and [toFile](https://sharp.pixelplumbing.com/api-output#tofile) functions to get the job done.

**Q: Why did you make this?**

A: So that me and my mom can make [perler](https://www.perler.com/) bead patterns out of any image. And eventually, if the images are small enough, you might be able share them using QR codes or some other form of representational data.

**Q: Why is the program so friendly?**

A: :shrug:

## Todos

- Add more docs.
- Make QR codes or some other form of data representation for small enough images.
- Turn it into a web app one day or cli tool.
