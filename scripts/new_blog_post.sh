#!/bin/bash

echo "You are making a new blog post"

echo "Who is writing this post?"
echo "1 for Kevin, 2 for Nick, 3 for Nick & Kevin"
while true; do
    read -p "Your selection: " author_code
    case $author_code in
        [1]* ) author="Kevin Arifin"; break;;
        [2]* ) author="Nick Chua"; break;;
        [3]* ) author="Nick Chua & Kevin Arifin"; break;;
        * ) echo "You didn't select a valid option"; exit;;
    esac
done

echo "You are quite the prolific writer, $author"

read -p "What's the title of your blog post? " title
echo "$title is quite the riveting title"

path=$(echo $title | awk '{print tolower($0)}' | awk '{gsub(" ", "-", $0); print}' | sed 's/[^a-z-]*//g')

if [ -d "content/blog/$path" ] || [ -d "content/drafts/$path" ]
then
    echo "Blog post with that title already exists"
    echo "FAIL"
    exit 1
fi

mkdir content/drafts/$path

echo "Created directory content/drafts/$path for your blog post"

index="content/drafts/$path/index.md"
touch $index
echo "---" >> $index
echo "title: $title" >> $index
echo "author: $author" >> $index
echo "date: '$(date '+%Y-%m-%d')'" >> $index
echo "type: post" >> $index
echo "---" >> $index

echo "Created content/drafts/$path/index.md for your blog post. Put your post content here."

echo "SUCCESS"
exit 0
