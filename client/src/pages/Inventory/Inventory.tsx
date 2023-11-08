import React, { useEffect, useRef, useState } from 'react'
import { signal } from "@preact/signals-react";


import { InventoryButtonContainer, InventoryColumnHeader, InventoryContainer, InventorySearchContainer, InventorySelectedItemContainer, InventorySelectedItemContent, InventorySelectedLabel, InventoryTable, InventoryTableContainer, ShowQuantityActionContainer } from './inventory.styled'
import { PageTitleHeader } from '../Dashboard/dashboard.styled'
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, MenuItem, Stack, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import sampleImage from "../../assets/sample/1.jpg"
import sampleImage2 from "../../assets/sample/2.jpg"


interface IItems {
    id: number;
    name: string;
    image: string;
    unit: string;
    quantity: {
        value: number;
        isEdit: boolean;
        type: string
    };
    expirationDate: string;
    stock: number;
    remarks: string;
}

const InventorySelectedItem: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (
        <InventorySelectedItemContainer>
            <InventorySelectedLabel ref={dropdownRef}>
                <h4>2 Items Selected</h4>
                {
                    isOpen ? (
                        <KeyboardArrowUpRoundedIcon onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <KeyboardArrowDownRoundedIcon onClick={() => setIsOpen(!isOpen)} />
                    )
                }
            </InventorySelectedLabel>
            {
                isOpen ? (
                    <InventorySelectedItemContent>

                    </InventorySelectedItemContent>
                ) : null
            }

        </InventorySelectedItemContainer>
    )
}
const isOpenQuantityAction = signal<boolean>(false);
const isEditQuantityAction = signal<boolean>(false);
const items = signal<IItems[]>([
    {
        id: 1,
        name: "Automated Hematology Analyzer (Rayto RT - 7300)",
        image: sampleImage,
        unit: "Gallon",
        quantity: {
            value: 20,
            isEdit: false,
            type: "quantity"
        },
        expirationDate: "N/A",
        stock: 1,
        remarks: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque, atque rem soluta reiciendis impedit ea a quae natus magni dolor doloribus dolorem, laudantium error distinctio animi sit voluptates iusto?",
    }
]);

const Inventory = () => {
    const handleShowQuantityAction = () => isOpenQuantityAction.value = true;
    const handleHideQuantityAction = () => isOpenQuantityAction.value = false;
    
    const handleItemsWhenEditQuantity = (id: number, isEdit: boolean) => {
        items.value = items.value.map(item => ({ ...item, quantity: { ...item.quantity, isEdit: id === item.id ? isEdit : item.quantity.isEdit } }));
    }

    const handleShowQuantityActionWhenEdit = (id: number) => {
        // handleItemsWhenEditQuantity(id, true);
    }

    const handleHideQuantityActionWhenEdit = (id: number) => {
        handleItemsWhenEditQuantity(id, false);
        isOpenQuantityAction.value = false;
    }

    const handleEditQuantity = (id: number, isCancel: boolean = false) => {
        items.value = items.value.map(item => ({ ...item, quantity: { ...item.quantity, isEdit: id === item.id && !isCancel ? true : false } }))
    }

    return (
        <InventoryContainer>

            <PageTitleHeader>
                <VaccinesRoundedIcon />
                <h3>Inventory</h3>
            </PageTitleHeader>
            <InventorySearchContainer>
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 0, width: '30rem' }}
                    placeholder="Search Item"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchRoundedIcon /></InputAdornment>,
                    }}
                />

                <Button size="large" variant="outlined" startIcon={<AddRoundedIcon />}>
                    Add New Item
                </Button>
            </InventorySearchContainer>

            <InventoryButtonContainer>

                <InventorySelectedItem />

                <InventoryColumnHeader>
                    <FileDownloadRoundedIcon />
                    <h4>Download CSV</h4>
                </InventoryColumnHeader>
            </InventoryButtonContainer>
            <InventoryTableContainer>
                <InventoryTable>
                    <thead>
                        <tr>
                            <th><Checkbox /></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Unit</th>
                            <th>Quantity</th>
                            <th>Expiration Date</th>
                            <th>Stock</th>
                            <th >Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.value.map(item => (
                                <tr>
                                    <td><Checkbox /></td>
                                    <td><img src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.unit}</td>
                                    <td onMouseEnter={handleShowQuantityAction} onMouseLeave={handleHideQuantityAction}>
                                        {
                                            item.quantity.isEdit ? (
                                                <TextField
                                                    size="small"
                                                    sx={{ width: "55px", textAlign: "right" }}
                                                    autoFocus
                                                    onBlur={() => handleHideQuantityActionWhenEdit(item.id)}
                                                />
                                            ) : item.quantity.value
                                        }

                                        {
                                            isOpenQuantityAction.value && !item.quantity.isEdit ? (
                                                <ShowQuantityActionContainer>
                                                    <Stack direction="row" alignItems="center" justifyContent="center">
                                                        <IconButton aria-label="Edit" size="small" color="warning" >
                                                            <HistoryEduRoundedIcon fontSize="inherit" />
                                                        </IconButton>
                                                        <IconButton aria-label="Show History" size="small" color="success" onClick={() => handleEditQuantity(item.id)}>
                                                            <EditNoteRoundedIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </Stack>
                                                </ShowQuantityActionContainer>
                                            ) : null
                                        }
                                        {
                                            item.quantity.isEdit ? (
                                                <ShowQuantityActionContainer>
                                                    <Stack direction="row" alignItems="center" justifyContent="center">
                                                        <IconButton aria-label="Add" size="small" color="warning"  onClick={() => handleEditQuantity(item.id, true)}>
                                                            <CancelRoundedIcon fontSize="inherit"/>
                                                        </IconButton>
                                                        <IconButton aria-label="Add" size="small" color="success">
                                                            <CheckCircleRoundedIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </Stack>
                                                </ShowQuantityActionContainer>
                                            ) : null
                                        }

                                    </td>
                                    <td>{item.expirationDate}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.remarks}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </InventoryTable>
            </InventoryTableContainer>
        </InventoryContainer>
    )
}

export default Inventory