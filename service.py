import sys

sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')
try:
    from googletrans import Translator

    raw = sys.argv[1]
    translator = Translator()
    translated = translator.translate(raw, dest='vi', src='en')
    print(translated.text)
except Exception as e:
    print("Error:" + str(e))
# data = sys.stdin.readlines()
# data = json.loads(data[0])
# print(data[0]+10)
# sys.stdout.flush()
