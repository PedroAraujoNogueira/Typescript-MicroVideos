import { Category } from './category';

describe("Category Unit Tests", () => {
    test('Constructor of category', () => {

        const created_at = new Date();

        // Arrange and Act together.
        const category = new Category({
            name: "Movie",
            description: "description",
            is_active: true,
            created_at,
        });

        // Assert
        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "description",
            is_active: true,
            created_at,  
        })
        expect(category.name).toBe("Movie")
        expect(category.description).toBe("description")
        expect(category.is_active).toBeTruthy()
        expect(category.created_at).toBe(created_at)
    })
})