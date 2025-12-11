const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      UserInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@exmaple.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      // ROLE
      Role: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '674a3f21c91b9e7d45f0b812'
          },
          name: {
            type: 'string',
            example: 'admin'
          },
          id: {
            type: 'string',
            example: '674a3f21c91b9e7d45f0b0ao'
          },
          name: {
            type: 'string',
            example: 'customer'
          }
        }
      },
      RoleInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'admin'
          },
          name: {
            type: 'string',
            example: 'customer'
          },
        }
      },
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '62f7a9b3c4d1e01234567890'
          },
          name: {
            type: 'string',
            example: 'Brand Sony Wireless Headphones'
          },
          description: {
            type: 'string',
            example: 'Bluetooth headphones with noise cancellation and 20-hour battery life.'
          },
          price: {
            type: 'number',
            example: 59.99
          },
          stock: {
            type: 'number',
            example: 150
          },
          category: {
            type: 'string',
            example: 'Electronic'
          },
          imageUrl: {
            type: 'string',
            example: 'https://example.com/images/product-headphones.jpg'
          }
        }
      },
      ProductInput: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '62f7a9b3c4d1e01234567890'
          },
          name: {
            type: 'string',
            example: 'Brand Sony Wireless Headphones'
          },
          description: {
            type: 'string',
            example: 'Bluetooth headphones with noise cancellation and 20-hour battery life.'
          },
          price: {
            type: 'number',
            example: 59.99
          },
          stock: {
            type: 'number',
            example: 150
          },
          category: {
            type: 'string',
            example: 'Electronic'
          },
          imageUrl: {
            type: 'string',
            example: 'https://example.com/images/product-headphones.jpg'
          }
        }
      },
      
    }
  },
  security: [{
    bearerAuth: []
  }]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
