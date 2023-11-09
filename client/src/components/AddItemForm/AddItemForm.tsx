import React, { ChangeEvent } from 'react'
import { AddItemFormContainer } from './addItemForm.styled'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { signal } from "@preact/signals-react";
import { Moment } from 'moment';
import dayjs, { Dayjs } from 'dayjs';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface IObjectKeys {
    [key: string]: string | number | undefined;
}

interface IFormValues extends IObjectKeys {
    name: string;
    unit: string;
    quantity: string;
    expirationDate?: string;
}


const selectedUnit = signal<string>('');
const formValues = signal<IFormValues>({
    name: "",
    unit: "",
    quantity: "",
    expirationDate: "",
})

const AddItemForm: React.FC = (): JSX.Element => {
    const units: { unit: string; value: string }[] = [
        {
            unit: "Gallon",
            value: "gallon"
        },
        {
            unit: "Box",
            value: "box"
        },
        {
            unit: "PCS",
            value: "pcs"
        },
        {
            unit: "UNIT",
            value: "unit"
        },
        {
            unit: "Pack",
            value: "pack"
        },
        {
            unit: "Bottle",
            value: "bottle"
        },
        {
            unit: "Kit",
            value: "kit"
        },
        {
            unit: "Set",
            value: "set"
        },
    ]

    const handleChangeFormValues = (event: ChangeEvent<HTMLInputElement>): void => {
        const values = formValues.value;
        if(values[event.target.name] !== undefined) {
            formValues.value = {...values, [event.target.name]: event.target.value.toString()}
        }
    }

    const handleChangeSelectedUnit = (event: SelectChangeEvent): void => {
        const values = formValues.value;
        if(values[event.target.name] !== undefined) {
            formValues.value = {...values, [event.target.name]: event.target.value.toString()}
        }
    }

    const handleDatePicker = (event: any): void => {
        formValues.value = {...formValues.value, expirationDate: event.format("DD/MM/YYYY")}
    }

    return (
        <AddItemFormContainer>
            <h4>Add Item Form</h4>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField id="name" name="name" label="Item Name" variant="outlined" fullWidth placeholder="Please enter item name" onChange={handleChangeFormValues} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                            <InputLabel id="unit">Unit</InputLabel>
                            <Select
                                labelId="unit"
                                id="unit"
                                value={selectedUnit.value}
                                label="Unit"
                                name="unit"
                                onChange={handleChangeSelectedUnit}
                            >
                                {
                                    units.map(item => (
                                        <MenuItem key={item.unit} value={item.value}>{item.unit}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField id="quantity" name="quantity" label="Quantity" variant="outlined" fullWidth placeholder="Please enter item quantity" onChange={handleChangeFormValues} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DatePicker onChange={value => handleDatePicker(value)} label="Expiration Date" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button component="label" variant="contained" fullWidth startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={12} marginTop={5}>
                        <Button variant="outlined" startIcon={<AddCircleRoundedIcon />} fullWidth>Add Item</Button>
                    </Grid>
                </Grid>
            </form>
        </AddItemFormContainer>
    )
}

export default AddItemForm