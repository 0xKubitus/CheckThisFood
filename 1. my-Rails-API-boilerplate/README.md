Clone me;
Delete config/credentials.yml.enc;
Open project's folder in Terminal, and run the following commands:

```
rake secret
```

-> Copy the string (key) that you get.

```
EDITOR=nano rails credentials:edit
```
(will open a file in Nano editor)


=> Add at the bottom of the file:
devise:
  jwt_secret_key: [copied key] // ⚠ there are 2 spaces at the beginning of this line



```
bundle install
rails db:create db:migrate
rails server
```

Your API should be running on port localhost:3001
