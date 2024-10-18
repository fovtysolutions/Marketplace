import json

# Load the JSON data from a file
with open('SampleData.json','r') as file:
    json_data = json.load(file)

# Function to add multiple fields to each object
def add_fields(data,new_fields):
    for item in data:
        item.update(new_fields)

# New Fields
new_fields = {
    "city" : "New York",
    "country" : "USA",
    "occupation" : "Developer"
}

# New Data Fields Added
add_fields(json_data,new_fields)

# Update the Json Data
with open('UpdatedData.json','w') as file:
    json.dump(json_data,file,indent=2)

print("Updated JSON data saved to 'updated_data.json'")