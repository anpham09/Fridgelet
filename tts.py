from gtts import gTTS

text = "Serve: Dollop the baked potatoes with sour cream and sprinkle with chopped chives or green onions. Serve immediately while hot and melty. Loaded smashed potatoes make an excellent side dish or party snack."
file_name = "loaded_smashed_potatoes_serve.mp3"

# Convert text to speech
tts = gTTS(text=text, lang='en')

# Save the audio file
tts.save(file_name)

print(f"✅ Audio saved as {file_name}")
