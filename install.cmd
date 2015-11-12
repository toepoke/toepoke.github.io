@echo off

if exist S:\Dropbox set DRIVE=S:
if not exist S:\Dropbox set DRIVE=C:

%DRIVE%
cd %DRIVE%\Dropbox\Git\repo\toepoke.github.io

c:\ruby200\bin\gem install "github-pages" --verbose
c:\ruby200\bin\gem install "jemoji" --verbose

