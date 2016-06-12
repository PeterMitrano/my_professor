all: zip upload

zip:
	zip skill.zip src/*.js

upload:
	aws lambda update-function-code --function-name ColorExpert --zip-file fileb://skill.zip
