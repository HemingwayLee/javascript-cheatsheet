with open('utf8doc.txt') as f:
    lines = f.readlines()

for line in lines:
    print(f'{line}: {len(line)}')


