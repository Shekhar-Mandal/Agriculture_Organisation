// Data Types and Object Types
const OBJECT_TYPES = {
    CONTACT: 'contact',
    SERVICE: 'service',
    PROJECT: 'project',
    TEAM_MEMBER: 'team_member',
    GALLERY_ITEM: 'gallery',
    BLOG_POST: 'blog_post'
};

// Contact Form Handler
async function submitContactForm(formData) {
    try {
        const contactData = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            createdAt: new Date().toISOString()
        };

        const result = await trickleCreateObject(OBJECT_TYPES.CONTACT, contactData);
        return { success: true, data: result };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return { success: false, error: error.message };
    }
}

// Services Handler
async function getServices() {
    try {
        const { items } = await trickleListObjects(OBJECT_TYPES.SERVICE);
        return { success: true, data: items };
    } catch (error) {
        console.error('Get services error:', error);
        return { success: false, error: error.message };
    }
}

// Projects Handler
async function getProjects() {
    try {
        const { items } = await trickleListObjects(OBJECT_TYPES.PROJECT);
        return { success: true, data: items };
    } catch (error) {
        console.error('Get projects error:', error);
        return { success: false, error: error.message };
    }
}

// Team Members Handler
async function getTeamMembers() {
    try {
        const { items } = await trickleListObjects(OBJECT_TYPES.TEAM_MEMBER);
        return { success: true, data: items };
    } catch (error) {
        console.error('Get team members error:', error);
        return { success: false, error: error.message };
    }
}

// Gallery Handler
async function getGalleryItems() {
    try {
        const { items } = await trickleListObjects(OBJECT_TYPES.GALLERY_ITEM);
        return { success: true, data: items };
    } catch (error) {
        console.error('Get gallery items error:', error);
        return { success: false, error: error.message };
    }
}

// Blog Posts Handler
async function getBlogPosts() {
    try {
        const { items } = await trickleListObjects(OBJECT_TYPES.BLOG_POST);
        return { success: true, data: items };
    } catch (error) {
        console.error('Get blog posts error:', error);
        return { success: false, error: error.message };
    }
}
