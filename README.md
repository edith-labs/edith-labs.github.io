# Edith Labs

## Quick Start

1. Clone the repo:

```
git clone https://github.com/kevarifin14/edith-labs.github.io.git
```

2. Confirm that you have npm installed. If you don't, follow the instruction on the [npm site](https://www.npmjs.com/get-npm).

```
npm -v
```

3. Make sure all package dependencies are installed:

```
npm install
```

4. Start a local development server and go to localhost:8000.

```
gatsby develop
```

## Deploying to Production

To deploy any changes you made to the website, run the deploy script which builds the pages and pushes changes to the Github pages server.
```
scripts/deploy.sh
```

## Creating a New Blog Post

To create a new blog post, run the script and it will prompt you with a few questions:
```
scripts/new_blog_post.sh
```
The script will prompt for the following inputs:
* title: the title of your blog post
* author: your name if you are writing the post (must be an approved author)

* This will create a new directory under `content/drafts` with the title of your blog post.
* You can make changes to your post in the `index.md` file.
* If you need to add any images to your blog, put them in `contents/drafts/your-blog-title` directory. You can reference them in markdown like so: `![](./your-image-here.png)`
* Once you are ready to test the blog post on the site, move the directory to `content/blog`. Start up a local development server

## Creating a New Post

To create a new page, run teh script and it will prompt you with a few questions:
```
scripts/new_page.sh
```
The script will prompt for the following inputs:
* title: the title of your new page
* path: the url that users can find this page

This will create a new file titled `your-input-path.md` with options title and path filled in for you. Once you start a local development server, you can find your page live at `localhost:8000/your-input-path`.