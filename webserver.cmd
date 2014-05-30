@echo off

REM Encoding fix - see http://stackoverflow.com/questions/13146420/my-jekyll-site-cant-build-liquid-exception-incompatible-character-encodings
chcp 65001


REM call jekyll serve

REM THe line below runs jekyll webserver in the same way as github pages (so we can pick up any errors)
bundle exec jekyll serve

