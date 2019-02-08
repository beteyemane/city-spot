import React from 'react'
import { Button, Divider, Grid, Icon, Segment, Form, Input, TextArea } from 'semantic-ui-react'

class RegForm extends React.Component{
  constructor(){
    super()
  }



  render(){
    return(
      <Segment placeholder>
        <Form>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical> <Icon name="world" size="large" /> </Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Form.Field required>
                  <label>Create A Username</label>
                  <Input fluid
                    placeholder='Username'
                    name='username'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Enter Your Email</label>
                  <Input fluid
                    placeholder='Email'
                    type='email'
                    name='email'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Create a Password</label>
                  <Input fluid
                    placeholder='Password'
                    type='password'
                    name='password'
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Confirm Your Password</label>
                  <Input
                    placeholder='Password'
                    type='password'
                    name='passwordConfirmation'
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                  <Form.Field>
                    <label>Profile Image</label>
                    <Input size='large'
                      placeholder='Image link'
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>Please Make a Bio</label>
                    <TextArea placeholder='Tell Us About Yourself' style={{ minHeight: 100 }} />
                  </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <Button content="Create Your Profile" primary />
        </Form>

      </Segment>
    )
  }
}

export default RegForm
