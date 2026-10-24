:: Based on https://snorristurluson.github.io/GitHubPagesLocallyOnWindows/

winget install -e --id RubyInstallerTeam.RubyWithDevKit.4.0

set PATH=%PATH%;C:\Ruby40-x64\bin

@echo **************************************************************
@echo About to install Ruby for Windows.
@echo When prompted, select "3 - MSYS2 and MINGW development toolchain"
@echo **************************************************************
call ridk install

@echo **************************************************************
@echo Installing GEM dependencies
@echo **************************************************************
call gem install jekyll bundler

@echo **************************************************************
@echo Updating to latest gem (why it doesn't install the latest! 🤬)
@echo **************************************************************
call gem update

@echo **************************************************************
@echo Install github pages dependencies
@echo **************************************************************
call bundle install

@echo **************************************************************
@echo Test we can run our blog locally!
@echo **************************************************************
call .\build.cmd