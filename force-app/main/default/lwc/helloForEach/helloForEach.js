import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts=[
        {ID:1,
         Name:'Anjani More',
         Title:'VP of Engineering'

        },
            {ID:2,
             Name:'xyz More',
             Title:'VP of sale'
    
            },
                {ID:3,
                 Name:'mno More',
                 Title:'VP of cloud'
        
                },
                    {ID:4,
                     Name:'pqr More',
                     Title:'VP of service'
            
                    }
    ]
}