<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<style>
    /* body{
        background-image: url(note.png);
        background-repeat: repeat-y;
    } */
    body{
        margin: 0;
        display: flex;
    }
    main{
        margin: 30px auto;
        width: 50%;
        background-color: #fbf4d2;
    }
    .list-item{
        margin: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        border-bottom: 2px black solid;
    }
    .list-item > a{
        grid: 1;
        font-size: 24px;
        margin: 10px;
    }
    label,input{
        flex: 8;
    }
    form {
        display: grid;
    }
.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.form-control + .form-control {
  margin-top: 1em;
}

.form-control--disabled {
  color: var(--form-control-disabled);
  cursor: not-allowed;
}

input[type="checkbox"]{
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50px;
    transform: translateY(-0.075em);
    background-color:white;
    display: grid;
    place-content: center;
}

input[type="checkbox"]::before{
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}

.tick:checked + .ins-val{
    text-decoration: line-through !important;
}
input[type="text"] {      
 width: 100%;
 border-left: 0;
 border-right: 0;
 border-top: 0;
 border-bottom: 0;
 outline: none;
 background: transparent;  
 font-size: 30px; 
}
a :hover{
   transform: translateY(-5px);
    filter: drop-shadow(8px 8px 3px black);
}
input[type="submit"] {  
    
}
</style>
<body>
    <main>
        <form action="index.php" method="get">
    
        </form>
    </main>
</body>
<script src="script.js"></script>
</html>