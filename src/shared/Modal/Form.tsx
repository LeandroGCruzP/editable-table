import { FormControl, FormLabel, Grid, Input, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { UserData } from "../../interfaces";

export const Form = () => {
  return(
      <form>
          <Grid
          templateColumns={{ base: "repeat(1,1rf)", md: "repeat(2,1fr)" }}
          gap={4}
        > 
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text"  name="name"/>
          </FormControl>

          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" name="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input type="number" name="age"/>
          </FormControl>

          <FormControl>
            <FormLabel>Access type</FormLabel>
            <Select>
              <option>Employer</option>
              <option>Admin</option>
            </Select>
          </FormControl>
          <Button type="submit">Send</Button>
          <Button>Cancel</Button>
        </Grid>
      </form>
   
  )
}