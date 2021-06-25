const fetchUknownData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        let content = "";
        res.forEach((item) => {
          content += `<tr>
            <td>${item.name}</td>
            <td>${item.capital}</td>
            <td>${item.region}</td>
            <td>${item.population}</td>
          </tr>`;
        });
        document.getElementById("result").innerHTML = content;
      })
      .catch(() => {
        document.getElementById("error").classList.remove("d-none");
      });
  };
  
  fetchUknownData();
  