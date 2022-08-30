import unicodedata

with open('sentence.txt') as f:
    lines = f.read()

print('----- without process -----')
for line in lines:
    print(f'{line}: {len(line)}')

print('----- with NFC process -----')
for line in unicodedata.normalize('NFC', lines):
    print(f'{line}: {len(line)}')
