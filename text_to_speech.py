import pyttsx3

engine = pyttsx3.init()

#Put text here
text = "This is an example of text-to-speech saved as audio."

#Put file name here
engine.save_to_file(text, 'example.mp3')

engine.runAndWait()
g
print("Audio saved as example.mp3")