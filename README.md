# REST 
> RESTful API Articles CRUD using NodeJS, Express and Mongoose

<br>
<hr>
<p align="center">
If you find this useful, please don't forget to star ⭐️ the repo, as this will help to promote the project.<br>
</p>
<hr>
<br>


## Features
- **List all articles.**
- **List article by Id.**
- **Create new article.**
- **Update article.**
- **Delete all articles.**
- **Delete article by Id.**
- **Passion ♥.**


## Setup
First of all, install all the needed dependencies using npm. ( We assume you have node.js installed in your machine )
```bash
npm install
```

Second of all, run an instance of your mongodb server locally in your machine ( We assume you have mongodb installed in your machine )
```bash
$ mongod
```

Lastly run the application in the nodejs runtime environement
```bash
$ node app.js
```

## API
### List all articles
  Returns json data about all articles in the database.

* **URL**

  /articles

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      { "_id": "5f229f1200c23181d0064ff3", 
        "title" : "Java", 
        "content": "Java is a programming langage." 
      },
      { "_id": "5f229f1200c23181d006fsd3",
        "title" : "C", 
        "content": "C is a programming langage."
      },
    ]
    ```
    
### Show article
  Returns json data about a specific article.

* **URL**

  /articles/:articleId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `articleId=[String]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      { "_id": "5f229f1200c23181d0064ff3", 
        "title" : "Java", 
        "content": "Java is a programming langage." 
      }
    ```


got lazy to finish the readme sry you have to look into the code and figure out the endpoints bye.
    



    


