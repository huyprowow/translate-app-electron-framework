# This is a desktop app translate use electronjs   
I use python-shell to run python script in nodejs to using googletrans from pip3 lib python to translate   
- this app default translate from english to vietnamese  
- if you want trans another language replace string after `dest` (language result) and `src` (language you want trans) in line 10 file `service.py` by  [langue code](https://cloud.google.com/translate/docs/languages) you want 
## 1. require to run:
- already installed python
- have a network connection

## 2. after clone install dependency, package by run:
- `npm install`
- `pip3 install googletrans==3.1.0a0`

## 3. run in development mode
`npm start`  