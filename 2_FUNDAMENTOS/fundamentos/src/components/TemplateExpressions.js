const TemplateExpressions = () =>{

  const name = "César"
  const data = {
    age: 32,
    job: "developer",
  }

return(
<div>
  <h2>Olá {name}, tudo bem?</h2>
  <p>Você tem: {data.age} anos, e trabalha como: {data.job}</p>
</div>
)
}

export default TemplateExpressions