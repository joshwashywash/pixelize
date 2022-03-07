# Image Pixelizer :robot:

Pixelize images from the command line.

## Disclaimer

! _Disclaimer_: This tool is not intended to be a production-level application, therefore it is missing parts that you would normally see in those cases.

Once you have [node](https://nodejs.org/en/) installed and the repo cloned on your computer, follow these steps:

1. Install dependencies.

```console
npm run install
```

2. Drop any images you want to pixelize into the `images` directory.

3. Build it!

```console
npm run build
```

4. Run it!

```console
npm run start
```

The program will guide you from there. Unless you need to rebuild the project, you can just `npm run start` from now on.

## Q and A

**Q: Why are all the pixelized images put into the `pixelated` directory?**

A: They can be easily gitignored this way.

**Q: Which image formats are supported?**

A: The program supports the same image formats that [sharp](https://sharp.pixelplumbing.com/#formats) does.

**Q: How does it work?**

A: All it does is use sharp's [png](https://sharp.pixelplumbing.com/api-output#png) and [toFile](https://sharp.pixelplumbing.com/api-output#tofile) functions to get the job done.

# **Q: Why did you make this?**

```console
cat output.txt
```

A: So that me and my mom can make [perler](https://www.perler.com/) bead patterns out of any image. And eventually, if the images are small enough, you might be able share them using QR codes or some other form of representational data.

**Q: Why is the program so friendly?**

A: :shrug:

## Todos

- Add more docs.
- Make QR codes or some other form of data representation for small enough images.
- Bundle so that you don't have to install node modules, etc.
- Turn it into a web app one day.
