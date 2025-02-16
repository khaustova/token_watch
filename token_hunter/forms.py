from django import forms
from django.urls import reverse_lazy
from django_select2.forms import ModelSelect2TagWidget, Select2Widget
from .models import Settings, MonitoringRule        


class SettingsSelect2TagWidget(ModelSelect2TagWidget):
    queryset = Settings.objects.all()

    def value_from_datadict(self, data, files, name):
        values = set(super().value_from_datadict(data, files, name))
        pks = self.queryset.filter(**{'pk__in': list(values)}).values_list('pk', flat=True)
        pks = set(map(str, pks))
        cleaned_values = list(pks)
        for val in values - pks:
            cleaned_values.append(self.queryset.create(title=val).pk)
        return cleaned_values


class SettingsForm(forms.Form):
    CHOICES = [
        ('maestro', 'Maestro Sniper Bot'),
    ]
    filter = forms.CharField(
        required=False,
        initial="?rankBy=trendingScoreH6&order=desc&minLiq=1000&maxAge=1",
        widget=forms.TextInput(
            attrs={
                "default": "Введите фильтр", 
            }
        ),
        label="Введите выражение с фильтром для токенов:",
    )
    monitoring_rule = forms.ChoiceField(
        choices=MonitoringRule,
        label="Выберите режим"
    )
    settings = forms.ModelMultipleChoiceField(
        widget=SettingsSelect2TagWidget(
            model=Settings,
            search_fields=['name__icontains',],
            attrs={
                'data-minimum-input-length': 0
            },
        ),
        queryset=Settings.objects.all(), 
        required=False, 
        label="Выберите настройки для покупки токенов", 
        initial=1)
    take_profit = forms.FloatField(
        initial=60,
        label="Введите значение тейк-профита"
    )
    stop_loss = forms.FloatField(
        initial=-20,
        label="Введите значение стоп-лосса"
    )
    bot = forms.ChoiceField(
        widget=forms.RadioSelect,
        choices=CHOICES, 
        initial="maestro",
    )
