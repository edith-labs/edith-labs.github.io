#!/bin/bash

echo "You are making a new page"

read -p "What's the title of your new page? " title
echo "$title is a great title for a page"

read -p "What's the path that users can access your new page? (example: /privacy) " path
echo "This is the way"

path=$(echo $title | awk '{print tolower($0)}' | awk '{gsub(" ", "-", $0); print}' | sed 's/[^a-z-]*//g')

pagefile="src/markdown-pages/$path.md"

if [ -d pagefile ]
then
    echo "Page with that title already exists"
    echo "FAIL"
    exit 1
fi

touch $pagefile

echo "Created directory $pagefile for your new page"

echo "---" >> $pagefile
echo "title: $title" >> $pagefile
echo "type: page" >> $pagefile
echo "path: /$path" >> $pagefile
echo "---" >> $pagefile

echo "SUCCESS"
exit 0
