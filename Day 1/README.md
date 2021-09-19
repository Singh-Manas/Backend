# Redis

- Redis is basically a __Cache__ that is used in Backend..
- Install Redis on Linux - `sudo apt install redis-server`.
- To enter into redis, type `redis-cli`.
- It is similar to local storage or session storage (Key-Value Pair).
- Value is always __string__.
- Redis is not database. It just stores a large object which stores key value pair.
- Redis is used because performing query on database is time consuming. We add data that is frequently accessed in Redis as Redis is stored in RAM. Hence it is faster to read values from Redis(~20ms) as compared to Database(~300-400ms).

### Basic Commands
- `SET key value` - For setting a key value pair
    - Ex: `SET name rachit`
- `GET key` - For getting key's value
    - Ex: `GET name` 
- `DEL key` - For deleting a key
    - Ex: `DEL name`
- `EXISTS key` - For checking if a key exists or not. (1 - Exists / 0 - Not Exists)
    - Ex: `EXISTS name`
- `KEYS *` - Gives list of all keys
-  `FLUSHALL` - Delete all keys
-  `ttl key` - Gives the expiration of the key. If it returns __-1__ then no expiration is set for the key. If __-2__ is returned then it means the key is expired now.
    - Ex: `ttl name`  
-  `expire key 10` - Sets expiration time of key in seconds after key has been set. 
    - Ex: `expire name 10`  
- `SETEX key seconds value` - Set expiration at time of setting the key.
    - Ex: `SETEX name 10 rachit`

### Array Commands
- Array is just the collection of values. 
- `LPUSH key value` - Pushing in front of the array. Key is the name of the __Array__ and value is inserted in the __Array__ We can add multiple values in the key using `LPUSH`
    - Ex: `LPUSH friends John`  
-  `LRANGE key start stop` - Print all elements of array from start to stop.
    - Ex: `LRANGE friends 0 -1` - Print all elements of array  
-  `RPUSH key value` - Pushing in back of the array. We can add multiple values in the key using `RPUSH`
    - Ex: `RPUSH friends Romy`
-  `LPOP key` - Remove from front of the array.
    - Ex: `LPOP friends`
-  `RPOP key` - Remove from back of the array.
    - Ex: `RPOP friends`

### Set Commands
- Set is a kind of array in which, no element is repeated.
- `SADD key value` - Sets a key value pair. The key is the name of the __SET__ and value is what is inserted in __SET__. We can add multiple values in a __SET__ but cannot add similar values.
    - Ex: `SADD hobbies "weight lifting"`, `SADD hobbies "Listening Music"`
- `SMEMBERS key` - List all values of the SET whose name is __key__
    - Ex: `SMEMBERS hobbies` 


### Objects
- Objects in Redis are represented as __Hashes__.
- `HSET key field value` - Sets a field(key) with value in key.
    - Ex:  `HSET person name rachit`
- `HGET key field` - Getting the value of field from key.
    - Ex: `HGET person name`
- `HGETALL key` - To get all keys and their values from object value of key. First Key is printed and then its value is printed.
    - Ex: `HGET person` 
- `HDEL key field` - Delete field from object in key.
    - Ex: `HDEL person name`
- `HEXISTS key field` - Check if field exists in key or not
    - Ex: `HEXISTS person name`

```
{
        name: "Rachit",
        age: "28",
        friends: ["Arun", "John", "Romy", "Romy"],
        hobbies: ["weight lifting", "w"],
        person: {
            name: "Rachit",
            age: "28"
        }
}
```

# Postgres

- Postgres is a database which stores large volumes of data.
- For entering into Postgres - `psql -U username`. Ex: `psql -U postgres`. 
- `\q` - For exiting Postgres
- `CREATE USER devsnest WITH PASSWORD 'password';` - Creating a User with Password
- `CREATE DATABASE devs;` - For creating a database. __Database is just a collection of Tables.__
- `GRANT ALL PRIVILEGES ON DATABASE devs to devsnest;` - Granting __ALL__ permissions to user to access database
- `GRANT SELECT PRIVILEGES ON DATABASE devs to devsnest;` - Grant __Select__ permissions to user to access database
- `\c devs;` - To connect to a database
- `\l;` - To list all databases
- `DROP DATABASE devs;` - To Delete a Database
- `CREATE TABLE COMPANY(ID NOT NULL, NAME CHAR[50], AGE INT, ADDRESS TEXT);` - Create a Table
- `\d` - List all Tables in Database
- `\d company` - List all Columns, Types and Modifiers in Table __Company__
- `DROP TABLE company;` - Delete Table company










