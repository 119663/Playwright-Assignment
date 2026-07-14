import { test, expect } from '@playwright/test';
import { fa, faker } from '@faker-js/faker';

test("User tests", async ({ request }) => {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    //POST To Create/Register User Account
    const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: name,
            email: email,
            password: password,
            title: "Mr",
            birth_date: "10",
            birth_month: "May",
            birth_year: "1990",
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: "India",
            zipcode: faker.location.zipCode(),
            state: faker.location.state(),
            city: faker.location.city(),
            mobile_number: faker.string.numeric('+254 ### ### ###')
        }
    })

    const postresponsebody = await postresponse.json();
    console.log(postresponsebody);


    expect(postresponse.status()).toBe(200);
    expect(postresponsebody.message).toBe("User created!");
    expect(postresponsebody.responseCode).toBe(201);


    //PUT METHOD To Update User Account
    const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
        form: {
            name: faker.person.firstName(),
            email: email,
            password: password,
            title: "Mr",
            birth_date: "10",
            birth_month: "May",
            birth_year: "1990",
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: "India",
            zipcode: faker.location.zipCode(),
            state: faker.location.state(),
            city: faker.location.city(),
            mobile_number: faker.string.numeric('+254 ### ### ###')
        }
    })
    const putresponsebody = await putresponse.json();
    console.log(putresponsebody);

    expect(putresponse.status()).toBe(200);
    expect(putresponsebody.message).toBe("User updated!");
    expect(putresponsebody.responseCode).toBe(200);


    //GET user account detail by email
    const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
        params: {
            email: email
        }
    })
    const getuserbyemailbody = await getuserbyemail.json();
    console.log(getuserbyemailbody);
    expect(getuserbyemail.status()).toBe(200);
    expect(getuserbyemailbody.responseCode).toBe(200);



    //POST To Verify Login with valid details
    const loginpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: email,
            password: password
        }
    })
    const loginpostresponsebody = await loginpostresponse.json();
    console.log(loginpostresponsebody);

    expect(loginpostresponse.status()).toBe(200);
    expect(loginpostresponsebody.message).toBe("User exists!");
    expect(loginpostresponsebody.responseCode).toBe(200);



    //POST To Verify Login with invalid details
    const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: email,
            password: faker.internet.password()
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
            password: password
        }
    })
    const emptyemailpostresponsebody = await emptyemailpostresponse.json();
    console.log(emptyemailpostresponsebody);

    expect(emptyemailpostresponse.status()).toBe(200);
    expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
    expect(emptyemailpostresponsebody.responseCode).toBe(400);


    //DELETE METHOD To Delete User Account
    const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
        form: {
            email: email,
            password: password
        }
    })
    const deleteresponsebody = await deleteresponse.json();
    console.log(deleteresponsebody);

    expect(deleteresponse.status()).toBe(200);
    expect(deleteresponsebody.message).toBe("Account deleted!");
    expect(deleteresponsebody.responseCode).toBe(200);
})