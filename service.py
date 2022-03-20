import sys,json
from googletrans import Translator

translator = Translator()
translated=translator.translate('안녕하세요.', dest='vi', src='ko')

# data = sys.stdin.readlines()
# data = json.loads(data[0])
# print(data[0]+10)
# sys.stdout.flush()
print(translated.text)
print(sys.args[1])