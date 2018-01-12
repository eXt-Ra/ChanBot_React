# coding: utf-8

"""
Suppose you have some texts of news and know their categories.
You want to train a system with this pre-categorized/pre-classified
texts. So, you have better call this data your training set.
"""

# You need to train the system passing each text one by one to the trainer module.
newsSet = [
    {
        'text': [
            'Oui bonjour je vous écoute',
            'Salut la team'
        ],
        'category': 'hello'
    },
    {
            'text': [
                'Quelles sont vos horaires ?',
                'Quelles sont vos horaire ?'
            ],
            'category': 'horaire'
        },
]
