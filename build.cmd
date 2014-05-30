@echo off

:start
	cls
	call jekyll build
	echo Hit return to build again
	echo Ctrl-C to quid

pause 
goto start

:theEnd
echo Bye!




