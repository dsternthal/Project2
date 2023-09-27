const markComplete = async (event) => {
    const id = event.target.getAttribute('data-id')
    console.log(id)
    const response = await fetch('/api/projects/' + id, {
        method: 'PUT',
        body: JSON.stringify({ importance:"gray" }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }

}


document
.querySelector('#complete')
.addEventListener('click', markComplete);