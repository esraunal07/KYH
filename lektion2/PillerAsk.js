function taTabletter(dagar) {
    let schema = '';
    for (let dag = 1; dag <= dagar; dag++) {
      // Ta tabletten A varje dag
      schema += 'A';
  
      // Ta tabletten B varannan dag
      if (dag % 2 === 0) {
        schema += 'B';
      }
  
      // Ta tabletten C varje dag
      schema += 'C';
  
      // Ta tabletten D varannan dag, inte samma dag som B
      if (dag % 2 === 0 && dag % 4 !== 0) {
        schema += 'D';
      }
  
      // Ta tabletten E var tredje dag
      if (dag % 3 === 0) {
        schema += 'E';
      }
  
      // Lägg till en radbrytning efter varje vecka (7 dagar)
      if (dag % 7 === 0) {
        schema += '\n';
      }
    }
    return schema;
  }
  
  const antalDagar = 30; // Ändra antalet dagar vid behov
  const doseringsschema = taTabletter(antalDagar);
  console.log(doseringsschema);
  