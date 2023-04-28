import { FormControl, FormGroup, FormHelperText, FormLabel, Input, InputLabel, TextField } from '@mui/material';
import { Component, ReactNode } from "react";

type MultiChoceOpt = {
    name: string;
    description?: string;
}
export class MultiChoice extends Component<MultiChoceOpt> {
    constructor(prop: MultiChoceOpt) {
        super(prop)
    }
    render(): ReactNode {
        return (
            <FormControl>
                <InputLabel>{this.props.name}</InputLabel>
                <Input id={this.props.name}></Input>
                {this.props.description ? <FormHelperText>
                    {this.props.description}
                </FormHelperText> : null}
            </FormControl>
        )
    }
}

type ShortResponseOpt = {
    name: string;
    description: string;
}
export class ShortResponse extends Component<ShortResponseOpt> {
    constructor(prop: ShortResponseOpt) {
        super(prop)
    }
    render(): ReactNode {
        return (
            <FormGroup style={{padding: "1rem 0"}}>
                <FormLabel style={{paddingBottom: "15px"}}>{this.props.description}</FormLabel>
                <TextField id={this.props.name} label={this.props.name} variant="outlined"></TextField>
            </FormGroup>
        )
    }
}

type LongResponseOpt = {
    name: string;
    description: string;
}
export class LongResponse extends Component<LongResponseOpt> {
    constructor(prop: LongResponseOpt) {
        super(prop)
    }
    render(): ReactNode {
        return (
            <FormGroup style={{padding: "1rem 0"}}>
                <FormLabel style={{paddingBottom: "15px"}}>{this.props.description}</FormLabel>
                <TextField id={this.props.name} label={this.props.name} variant="outlined"></TextField>
            </FormGroup>
        )
    }
}