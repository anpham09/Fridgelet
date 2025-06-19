from gtts import gTTS 

text = "Serve: Spoon the fruit cocktail into glasses or bowls over plenty of crushed ice. Top with extra coconut milk or more fruit if you like. Enjoy this refreshing Vietnamese dessert on a hot day!"
file_name = "vietnamese_fruit_cocktail_serve.mp3"

# Convert text to speech
tts = gTTS(text=text, lang='en')

# Save the audio file
tts.save(file_name)

print(f"✅ Audio saved as {file_name}")
