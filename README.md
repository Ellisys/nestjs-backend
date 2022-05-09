## Instalação

```bash
$ npm install
```

```bash
$ docker-compose up
```

## Rodando o sistema

```bash
# Dev
$ nest start --watch

# Debug
$ nest start --debug --watch

```

## Requisições da API
```bash
# POST
HTTP POST localhost:3000/doctors

Body Raw JSON
    {
        "name": string,
        "crm": string,
        "landline": string,
        "cellphone": string,
        "cep": string,
        "specialties": []
    }
    
Return: Promise<Doctor>
```

```bash
# GetAll
HTTP GET localhost:3000/doctors

Return
    {
        "id": 1,
        "name": "Gustavo",
        "crm": "1234567",
        "landline": "87654321",
        "cellphone": "998765432",
        "cep": "08051040",
        "specialties": [
            "Dev",
            "Dev"
        ],
        "isActive": true
    }
```

```bash
# GetOneBy
HTTP GET localhost:3000/doctors/nome_do_campo/:valor

Return: Promise<Doctor>
    {
        "id": 1,
        "name": "Gustavo",
        "crm": "1234567",
        "landline": "87654321",
        "cellphone": "998765432",
        "cep": "08051040",
        "specialties": [
            "Dev",
            "Dev"
        ],
        "isActive": true
    }
```

```bash
# UPDATE
HTTP PATCH localhost:3000/doctors/nome_do_campo/:valor

Body Raw JSON
    {
        "name": string,
        "crm": string,
        "landline": string,
        "cellphone": string,
        "cep": string,
        "specialties": []
    }
    
Return: Promise<Doctor>
```

```bash
# SOFT DELETE
HTTP DELETE localhost:3000/doctors/:id
    
Return: Promise<Doctor>
    {
        "id": 1,
        "isActive": false
    }
```
