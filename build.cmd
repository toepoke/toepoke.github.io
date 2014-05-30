@echo off

if exist S:\Dropbox set DRIVE=S:
if not exist S:\Dropbox set DRIVE=C:

%DRIVE%
cd %DRIVE%\Dropbox\Git\repo\toepoke.github.io

REM Encoding fix - see http://stackoverflow.com/questions/13146420/my-jekyll-site-cant-build-liquid-exception-incompatible-character-encodings
chcp 65001

:start
	cls
	call jekyll build
	echo Hit return to build again
	echo Ctrl-C to quid

pause 
goto start

:theEnd
echo Bye!




