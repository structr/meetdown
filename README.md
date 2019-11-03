<img src="https://meetdown.org/img/meetdown.png">


Meetdown is a free, community-driven event and social network platform. Anyone can run their own instances, although there's a central instance hosted on https://meetdown.org which is free to use for everyone.

Community-driven means that everyone can join the project and help make it better, e.g. by sending feature requests or even help development by creating pull requests.

## About the name "Meetdown"

The name "Meetdown" is just what came to my mind when I read about Meetup starting to charge for RSVPs. Everyone is invited to find a better name. Just open an issue in this repository and start a discussion.

## Principles

- Community-driven
- Quality before quantity
- Small before big
- Decentralized
- Privacy first (no ads, no user tracking)
- Earn money: possibly yes, but only to cover costs
- Make profit: not intentional, if yes, not in the overall balance, i.e. any profit flows back into the Community

## Features

### General

- Self-registration with double-opt-in via e-mail
- Login/logout with e-mail address and password
- Browse groups and events

### Groups

- Create groups
- Within a group, create events
- Join and leave groups

### Events

- Display event details
- Map of event location
- Subscribe to/unsubscribe from events

### Social Network

- n/a (see Roadmap further below)

### UI

- No framework, just plain HTML5, CSS3 and JavaScript (easy to learn and follow)
- Carefully hand-crafted HTML and CSS (no large boilerplate code - just the essentials)
- Responsive and mobile-friendly
- Material icons (https://material.io/resources/icons)

### Security

- HTTPS
- Passwords are stored as salted SHA-512 hashes only

## Requirements

Meetdown is a Structr application. It can only be run on a Structr instance.

### Installation

- Download and install Structr (https://support.structr.com/article/246)
- Import the Meetdown application from the Dashboard (or via command line: https://support.structr.com/article/428#import).

## Roadmap (planned features)

### General

- Search groups and events
- Explore groups and events on a map
- RSS feeds for subscribers
- Feedback system

### Groups

- Open (public, everyone can join) and closed groups (private, invitation/admission only)
- Group member and organizers management
- E-mail invitations

### Events

- Open (public, everyone can subscribe) and closed events (private, invitation/admission only)
- Event subscribers and managers management
- E-mail invitations
- Event sharing on social platforms
- Broadcasting/Push notifications (last-minute updates via Social Media/SMS)
- Calendar integration
- Location provider database

### Social Network

- Follow/unfollow people
- Send messages to other people in your group (or anyone)
- Profile pages (for speakers/organizers etc.)

### Security

- Two-factor authentication
- OAuth login (Auth0, GitHub, Twitter, Google, Facebook)


## License

The project's sources (the content of this repo) is released under the Apache 2.0 license.

## Development

Everyone is invited to join the project and send pull requests.

## Who's behind this project?

This project is sponsored and hosted by Structr GmbH (https://structr.com), the company behind the Structr platform (see https://github.com/structr/structr). Structr is an open-source development and runtime platform for graph application platform using a graph database (Neo4j, see https://github.com/neo4j/neo4j).

Structr GmbH doesn't have any commercial interests in the project, it's just a showcase/demo application to demonstrate and teach the features and benefits of the Structr platform. The initial version was developed by @amorgner in about 2 days.

Structr will support the community with resources (GitHub hosting, issue management, discussions, development time).

**The team behind this project will make sure that there will be no ads, no user tracking and no activities or other things that are a threat to an open, democratic, friendly and fair society.**

