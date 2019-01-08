from django.db import models

from django.utils.timezone import now

class New(models.Model):
	title = models.CharField(max_length=150, verbose_name='Заголовок')
	img = models.ImageField(verbose_name='Изображение')
	text = models.TextField(max_length=500, verbose_name='Основной текст')
	pub_date = models.DateTimeField(
		default=now(), 
		verbose_name='Дата публикации'
	)
	source = models.CharField(
		max_length = 150, 
		null=True, 
		blank=True, 
		verbose_name='Источник'
	)

	class Meta:
		ordering = ["pub_date"]	

	def __str__(self):
		return self.title

class Event(models.Model):
	title = models.CharField(max_length=150, verbose_name='Заголовок')
	date = models.DateTimeField(default=now(), verbose_name='Дата')
	text = models.CharField(
		max_length=50, 
		verbose_name='Вспомагательный текст', 
		null=True
	)

	class Meta:
		ordering = ["date"]	

	def __str__(self):
		return self.title

class Information(models.Model):
	title = models.CharField(max_length=150, verbose_name='Заголовок')
	text = models.CharField(max_length=500, verbose_name='Основной текст')
	pub_date = models.DateTimeField(
		default=now(), 
		verbose_name='Дата публикации'
	)

	class Meta:
		ordering = ["pub_date"]	

	def __str__(self):
		return self.title

class Comment(models.Model):
	autor = models.CharField(max_length=50, verbose_name='Автор')
	text = models.TextField(max_length=300, verbose_name='Текст комментария')
	pub_date = models.DateTimeField(
		default=now(),
		verbose_name='Дата публикации'
	)
	this_new = models.ForeignKey(New, on_delete=models.PROTECT)

class Albom(models.Model):
	title = models.CharField(max_length=100, verbose_name='Альбом')
	pub_date = models.DateTimeField(
		default=now(),
		verbose_name='Дата публикации'
	)

class Photo(models.Model):
	albom = models.ForeignKey(
		'Albom', 
		on_delete=models.CASCADE, 
		verbose_name='Фото'
	)
	image = models.ImageField(upload_to='alboms/')