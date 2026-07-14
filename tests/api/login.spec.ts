import { test, expect } from '@playwright/test';
import users from '../../testdata/users.json';

test("Verify Login API", async ({ request }) => {
    //POST To Verify Login with valid details
    const postresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: users[0].email,
            password: users[0].password
        }
    })
    const postresponsebody = await postresponse.json();
    console.log(postresponsebody);

    expect(postresponse.status()).toBe(200);
    expect(postresponsebody.message).toBe("User exists!");
    expect(postresponsebody.responseCode).toBe(200);


    //POST To Verify Login with invalid details
    const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: users[1].email,
            password: users[1].password
        }
    })
    const invalidpostresponsebody = await invalidpostresponse.json();
    console.log(invalidpostresponsebody);

    expect(invalidpostresponse.status()).toBe(200);
    expect(invalidpostresponsebody.message).toBe("User not found!");
    expect(invalidpostresponsebody.responseCode).toBe(404);


    //POST To Verify Login without email parameter
    const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            password: users[0].password
        }
    })
    const emptyemailpostresponsebody = await emptyemailpostresponse.json();
    console.log(emptyemailpostresponsebody);

    expect(emptyemailpostresponse.status()).toBe(200);
    expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
    expect(emptyemailpostresponsebody.responseCode).toBe(400);

    
    //GET user account detail by email
    const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
        params: {
            email: users[0].email
        }
    })
    const getuserbyemailbody = await getuserbyemail.json();
    console.log(getuserbyemailbody);
    expect(getuserbyemail.status()).toBe(200);
    expect(getuserbyemailbody.responseCode).toBe(200);
})

