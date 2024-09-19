/*
const graphData = {
    nodes: [
        { id: '001', label: 'Alice', score: Math.random() },
        { id: '002', label: 'Bob', score: Math.random() },
        { id: '003', label: 'Charlie', score: Math.random() },
        { id: '004', label: 'Diana', score: Math.random() },
        { id: '005', label: 'Eve', score: Math.random() },
        { id: '006', label: 'Frank', score: Math.random() },
        { id: '007', label: 'Grace', score: Math.random() },
        { id: '008', label: 'Hank', score: Math.random() },
        { id: '009', label: 'Ivy', score: Math.random() },
        { id: '010', label: 'Jack', score: Math.random() },
        { id: '011', label: 'Karen', score: Math.random() },
        { id: '012', label: 'Louis', score: Math.random() },
        { id: '013', label: 'Mia', score: Math.random() },
        { id: '014', label: 'Nina', score: Math.random() },
        { id: '015', label: 'Oscar', score: Math.random() },
        { id: '016', label: 'Paul', score: Math.random() },
        { id: '017', label: 'Quinn', score: Math.random() },
        { id: '018', label: 'Rita', score: Math.random() },
        { id: '019', label: 'Sam', score: Math.random() },
        { id: '020', label: 'Tina', score: Math.random() }
    ],
    links: [
        { source: '001', target: '002', score: Math.random() },
        { source: '001', target: '003', score: Math.random() },
        { source: '002', target: '004', score: Math.random() },
        { source: '002', target: '005', score: Math.random() },
        { source: '003', target: '006', score: Math.random() },
        { source: '004', target: '007', score: Math.random() },
        { source: '005', target: '008', score: Math.random() },
        { source: '006', target: '009', score: Math.random() },
        { source: '007', target: '010', score: Math.random() },
        { source: '008', target: '011', score: Math.random() },
        { source: '009', target: '012', score: Math.random() },
        { source: '010', target: '013', score: Math.random() },
        { source: '011', target: '014', score: Math.random() },
        { source: '012', target: '015', score: Math.random() },
        { source: '013', target: '016', score: Math.random() },
        { source: '014', target: '017', score: Math.random() },
        { source: '015', target: '018', score: Math.random() },
        { source: '016', target: '019', score: Math.random() },
        { source: '017', target: '020', score: Math.random() },
        { source: '018', target: '001', score: Math.random() },
        { source: '019', target: '002', score: Math.random() }
    ]
};

export default graphData;
*/

const graphData = {
    nodes: [
        { 
            id: '001', 
            label: 'Alice', 
            score: Math.random(),
            name: 'Alice Johnson', 
            aliases: ['Alicia', 'AJ'], 
            ipAddress: '192.168.1.1', 
            location: 'New York, USA', 
            socialMediaLinks: ['https://instagram.com/alice', 'https://facebook.com/alice', 'https://whatsapp.com/alice'], 
            miscLinks: ['https://aliceblog.com', 'https://aliceportfolio.com'] 
        },
        { 
            id: '002', 
            label: 'Bob', 
            score: Math.random(),
            name: 'Robert Williams', 
            aliases: ['Bobby', 'Rob'], 
            ipAddress: '192.168.1.2', 
            location: 'Los Angeles, USA', 
            socialMediaLinks: ['https://instagram.com/bob', 'https://facebook.com/bob', 'https://whatsapp.com/bob'], 
            miscLinks: ['https://bobthebuilder.com', 'https://bobdesigns.com'] 
        },
        { 
            id: '003', 
            label: 'Charlie', 
            score: Math.random(),
            name: 'Charles Brown', 
            aliases: ['Chuck'], 
            ipAddress: '192.168.1.3', 
            location: 'Chicago, USA', 
            socialMediaLinks: ['https://instagram.com/charlie', 'https://facebook.com/charlie', 'https://whatsapp.com/charlie'], 
            miscLinks: ['https://charliepaintings.com'] 
        },
        { 
            id: '004', 
            label: 'Diana', 
            score: Math.random(),
            name: 'Diana Prince', 
            aliases: ['Wonder Woman'], 
            ipAddress: '192.168.1.4', 
            location: 'London, UK', 
            socialMediaLinks: ['https://instagram.com/diana', 'https://facebook.com/diana', 'https://whatsapp.com/diana'], 
            miscLinks: ['https://dianafashion.com', 'https://dianainspo.com'] 
        },
        { 
            id: '005', 
            label: 'Eve', 
            score: Math.random(),
            name: 'Evelyn Scott', 
            aliases: ['Evie'], 
            ipAddress: '192.168.1.5', 
            location: 'Paris, France', 
            socialMediaLinks: ['https://instagram.com/eve', 'https://facebook.com/eve', 'https://whatsapp.com/eve'], 
            miscLinks: ['https://eveskitchen.com', 'https://evewrites.com'] 
        },
        { 
            id: '006', 
            label: 'Frank', 
            score: Math.random(),
            name: 'Frank Castle', 
            aliases: ['The Punisher'], 
            ipAddress: '192.168.1.6', 
            location: 'Miami, USA', 
            socialMediaLinks: ['https://instagram.com/frank', 'https://facebook.com/frank', 'https://whatsapp.com/frank'], 
            miscLinks: ['https://punisher.com', 'https://franksecurity.com'] 
        },
        { 
            id: '007', 
            label: 'Grace', 
            score: Math.random(),
            name: 'Grace Hopper', 
            aliases: ['Gracie'], 
            ipAddress: '192.168.1.7', 
            location: 'Boston, USA', 
            socialMediaLinks: ['https://instagram.com/grace', 'https://facebook.com/grace', 'https://whatsapp.com/grace'], 
            miscLinks: ['https://gracecode.com', 'https://hopperintech.com'] 
        },
        { 
            id: '008', 
            label: 'Hank', 
            score: Math.random(),
            name: 'Hank Schrader', 
            aliases: ['Heisenberg'], 
            ipAddress: '192.168.1.8', 
            location: 'Albuquerque, USA', 
            socialMediaLinks: ['https://instagram.com/hank', 'https://facebook.com/hank', 'https://whatsapp.com/hank'], 
            miscLinks: ['https://hankminerals.com', 'https://schraderlaw.com'] 
        },
        { 
            id: '009', 
            label: 'Ivy', 
            score: Math.random(),
            name: 'Ivy Green', 
            aliases: ['Iv', 'Greens'], 
            ipAddress: '192.168.1.9', 
            location: 'San Francisco, USA', 
            socialMediaLinks: ['https://instagram.com/ivy', 'https://facebook.com/ivy', 'https://whatsapp.com/ivy'], 
            miscLinks: ['https://ivyplantshop.com', 'https://greengoods.com'] 
        },
        { 
            id: '010', 
            label: 'Jack', 
            score: Math.random(),
            name: 'Jack Ryan', 
            aliases: ['JR'], 
            ipAddress: '192.168.1.10', 
            location: 'Washington, USA', 
            socialMediaLinks: ['https://instagram.com/jack', 'https://facebook.com/jack', 'https://whatsapp.com/jack'], 
            miscLinks: ['https://ryananalytica.com', 'https://jrryan.com'] 
        },
        { 
            id: '011', 
            label: 'Karen', 
            score: Math.random(),
            name: 'Karen White', 
            aliases: ['Kaz'], 
            ipAddress: '192.168.1.11', 
            location: 'Seattle, USA', 
            socialMediaLinks: ['https://instagram.com/karen', 'https://facebook.com/karen', 'https://whatsapp.com/karen'], 
            miscLinks: ['https://karenwrites.com', 'https://kazfashion.com'] 
        },
        { 
            id: '012', 
            label: 'Louis', 
            score: Math.random(),
            name: 'Louis Armstrong', 
            aliases: ['Lou'], 
            ipAddress: '192.168.1.12', 
            location: 'New Orleans, USA', 
            socialMediaLinks: ['https://instagram.com/louis', 'https://facebook.com/louis', 'https://whatsapp.com/louis'], 
            miscLinks: ['https://louisjazz.com', 'https://armstronglegacy.com'] 
        },
        { 
            id: '013', 
            label: 'Mia', 
            score: Math.random(),
            name: 'Mia Parker', 
            aliases: ['Mimi'], 
            ipAddress: '192.168.1.13', 
            location: 'Austin, USA', 
            socialMediaLinks: ['https://instagram.com/mia', 'https://facebook.com/mia', 'https://whatsapp.com/mia'], 
            miscLinks: ['https://miapaints.com', 'https://parkerarts.com'] 
        },
        { 
            id: '014', 
            label: 'Nina', 
            score: Math.random(),
            name: 'Nina Simone', 
            aliases: ['Simone'], 
            ipAddress: '192.168.1.14', 
            location: 'Philadelphia, USA', 
            socialMediaLinks: ['https://instagram.com/nina', 'https://facebook.com/nina', 'https://whatsapp.com/nina'], 
            miscLinks: ['https://ninasounds.com', 'https://simoneart.com'] 
        },
        { 
            id: '015', 
            label: 'Oscar', 
            score: Math.random(),
            name: 'Oscar Wilde', 
            aliases: ['Oz'], 
            ipAddress: '192.168.1.15', 
            location: 'Dublin, Ireland', 
            socialMediaLinks: ['https://instagram.com/oscar', 'https://facebook.com/oscar', 'https://whatsapp.com/oscar'], 
            miscLinks: ['https://wildewords.com', 'https://oscarbooks.com'] 
        },
        { 
            id: '016', 
            label: 'Paul', 
            score: Math.random(),
            name: 'Paul McCartney', 
            aliases: ['Macca'], 
            ipAddress: '192.168.1.16', 
            location: 'Liverpool, UK', 
            socialMediaLinks: ['https://instagram.com/paul', 'https://facebook.com/paul', 'https://whatsapp.com/paul'], 
            miscLinks: ['https://mccartneymusic.com', 'https://paullegacy.com'] 
        },
        { 
            id: '017', 
            label: 'Quinn', 
            score: Math.random(),
            name: 'Quinn Taylor', 
            aliases: ['QT'], 
            ipAddress: '192.168.1.17', 
            location: 'Sydney, Australia', 
            socialMediaLinks: ['https://instagram.com/quinn', 'https://facebook.com/quinn', 'https://whatsapp.com/quinn'], 
            miscLinks: ['https://taylormedia.com', 'https://quinnfilms.com'] 
        },
        { 
            id: '018', 
            label: 'Rita', 
            score: Math.random(),
            name: 'Rita Ora', 
            aliases: ['Riri'], 
            ipAddress: '192.168.1.18', 
            location: 'London, UK', 
            socialMediaLinks: ['https://instagram.com/rita', 'https://facebook.com/rita', 'https://whatsapp.com/rita'], 
            miscLinks: ['https://ritamusic.com', 'https://orabeauty.com'] 
        },
        { 
            id: '019', 
            label: 'Sam', 
            score: Math.random(),
            name: 'Samuel Jackson', 
            aliases: ['Sammy'], 
            ipAddress: '192.168.1.19', 
            location: 'Atlanta, USA', 
            socialMediaLinks: ['https://instagram.com/sam', 'https://facebook.com/sam', 'https://whatsapp.com/sam'], 
            miscLinks: ['https://samfilms.com', 'https://jacksonlegacy.com'] 
        },
        { 
            id: '020', 
            label: 'Tina', 
            score: Math.random(),
            name: 'Tina Turner', 
            aliases: ['TT'], 
            ipAddress: '192.168.1.20', 
            location: 'Zurich, Switzerland', 
            socialMediaLinks: ['https://instagram.com/tina', 'https://facebook.com/tina', 'https://whatsapp.com/tina'], 
            miscLinks: ['https://turnermusic.com', 'https://tinalegend.com'] 
        }
    ],
    links: [
        { source: '001', target: '002', score: Math.random() },
        { source: '001', target: '003', score: Math.random() },
        { source: '002', target: '004', score: Math.random() },
        { source: '002', target: '005', score: Math.random() },
        { source: '003', target: '006', score: Math.random() },
        { source: '004', target: '007', score: Math.random() },
        { source: '005', target: '008', score: Math.random() },
        { source: '006', target: '009', score: Math.random() },
        { source: '007', target: '010', score: Math.random() },
        { source: '008', target: '011', score: Math.random() },
        { source: '009', target: '012', score: Math.random() },
        { source: '010', target: '013', score: Math.random() },
        { source: '011', target: '014', score: Math.random() },
        { source: '012', target: '015', score: Math.random() },
        { source: '013', target: '016', score: Math.random() },
        { source: '014', target: '017', score: Math.random() },
        { source: '015', target: '018', score: Math.random() },
        { source: '016', target: '019', score: Math.random() },
        { source: '017', target: '020', score: Math.random() },
        { source: '018', target: '001', score: Math.random() },
        { source: '019', target: '002', score: Math.random() }
    ]
};

export default graphData;
