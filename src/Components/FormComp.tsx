import { FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ChangeEvent, Component, ReactNode } from "react";

type MultiChoceOpt = {
    name: string;
    description: string;
    onChange: (event: ChangeEvent<HTMLInputElement>, val: string) => void;
    defaultVal?: string;
    options: {
        name: string;
        value?: string
    }[];
}
export class MultiChoice extends Component<MultiChoceOpt> {
    constructor(prop: MultiChoceOpt) {
        super(prop)
    }
    render(): ReactNode {
        return (
            <FormGroup>
                <FormControl style={{padding: "1rem 0"}}>
                <p style={{paddingBottom: "15px"}}>{this.props.description}</p>
                <FormLabel>{this.props.name}</FormLabel>
                <RadioGroup defaultValue={this.props.defaultVal} name={this.props.name} onChange={this.props.onChange}>
                    {this.props.options.map((opt,i)=>
                        <FormControlLabel
                        key={i}
                        value={opt.value ?? opt.name}
                        control={<Radio/>}
                        label={opt.name}
                        />
                    )}
                </RadioGroup>
                </FormControl>
            </FormGroup>
        )
    }
}

type ResponseOpt = {
    name: string;
    description: string;
    onChange: (event?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLongResponse?: boolean;
}
export class TextResponse extends Component<ResponseOpt> {
    constructor(prop: ResponseOpt) {
        super(prop)
    }
    render(): ReactNode {
        return (
            <FormGroup style={{padding: "1rem 0"}}>
                <p style={{paddingBottom: "15px"}}>{this.props.description}</p>
                <TextField id={this.props.name} label={this.props.name} variant="outlined" multiline={this.props.isLongResponse} onChange={this.props.onChange}></TextField>
            </FormGroup>
        )
    }
}
