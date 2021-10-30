import re
def alter(file):
    """
    替换文件中的字符串
    :param file:文件名
    :param old_str:就字符串
    :param new_str:新字符串
    :return:
    """
    file_data = ""
    with open(file, "r", encoding="utf-8") as f:
        for line in f:
            if line.startswith('      "chest":'):
                line = '      "chest": "Dapp-Learning Contributor",\n'
            file_data += line
    with open(file,"w",encoding="utf-8") as f:
        f.write(file_data)
 
alter("loot.json")
