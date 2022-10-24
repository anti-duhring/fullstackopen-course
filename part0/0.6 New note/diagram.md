title New note

note over browser:
the function to rerender the note list
with the note created is fired
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note over server:
server receives the JSON content
{"content":NOTE TEXT,"date":DATE}
end note
server-->browser: {"message":"note created"}