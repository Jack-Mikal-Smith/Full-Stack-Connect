const newFormHandler = async function (event) {
    event.preventDefault();

    const body = document.querySelector('textarea[name="post-body"]').value;


    await fetch(`/api/jobpostings`, {
        method: 'POST',
        body: JSON.stringify({
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    // document.location.replace('/JobPostings');
};
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
