from django import forms
from .widgets import MEditorWidget

   
class MEditorFormField(forms.fields.CharField):
    
    def __init__(self, config_name="default", *args, **kwargs):
        kwargs.update({
            "widget": MEditorWidget()
        })
        super(MEditorFormField, self).__init__(*args, **kwargs)
        

class ParsingTopTradersForm(forms.Form):
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.label_suffix = ""
        
    filter = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={'placeholder': 'По умолчанию парсится по рейтингу трендов за 6 часов'}),
        label="Введите фильтр для поиска монет:",
    )
    pages = forms.CharField(
        required=False, 
        widget=forms.NumberInput(attrs={'placeholder': 'По умолчанию парсится первая страница'}),
        label="Введите количество страниц:",
    )
    
class CheckCoinForm(forms.Form):  
    coin = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Сейчас поддерживается только сеть SOLANA", "id": "check-coin-input", "name": "coin"}),
        label="Введите название монеты:",
    )
