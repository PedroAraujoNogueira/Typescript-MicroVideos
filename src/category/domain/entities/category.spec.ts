import { Category, CategoryProperties } from './category';
import { omit } from 'lodash';
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo';

describe("Category Unit Tests", () => {
    test('Constructor of category', () => {
        
        // Teste criando Category somente passando name no construtor.
        let category = new Category({
            name: "Movie",
        });

        const props = omit(category.props, ['created_at'])
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,
        })
        
        // Teste criando Category passando name, description e is_active no construtor.
        let created_at = new Date();
        category = new Category({
            name: "Movie",
            description: "some description",
            is_active: false,
            created_at,
        })

        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "some description",
            is_active: false,
            created_at,
        })
    
        // Teste criando Category passando name e description no construtor.
        category = new Category({
            name: "Movie",
            description: "other description",
        })
        
        expect(category.props).toMatchObject({
            name: "Movie",
            description: "other description",
        });

        // Teste criando Category passando name e is_active no construtor.
        category = new Category({
            name: "Movie",
            is_active: true,
        })
        
        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: true,
        });

        // Teste criando Category passando name e created_at no construtor.
        created_at = new Date();
        category = new Category({
            name: "Movie",
            created_at, 
        })
        
        expect(category.props).toMatchObject({
            name: "Movie",
            created_at,
        });
    })

    test("id field", () => {
        type CategoryData = { props: CategoryProperties, id?: UniqueEntityId }
        const data: CategoryData[] = [
            { props: { name: "Movie" }},
            { props: { name: "Movie" }, id: null},
            { props: { name: "Movie" }, id: undefined},
            { props: { name: "Movie" }, id: new UniqueEntityId() },
        ] 

        data.forEach(i => {
            let category = new Category(i.props, i.id)
            expect(category.id).not.toBeNull();
            expect(category.id).toBeInstanceOf(UniqueEntityId);
        })

        // let category = new Category({ name: "Movie" })
        // expect(category.id).not.toBeNull();
        // expect(uuidValidate(category.id)).toBeTruthy();
        
        // category = new Category({ name: "Movie" }, null);
        // expect(category.id).not.toBeNull();
        // expect(uuidValidate(category.id)).toBeTruthy();

        // category = new Category({ name: "Movie" }, undefined);
        // expect(category.id).not.toBeNull();
        // expect(uuidValidate(category.id)).toBeTruthy();

        // category = new Category({ name: "Movie" }, "da89cbd9-81b2-44fb-8951-0937ebe03499")
        // expect(category.id).not.toBeNull();
        // expect(uuidValidate(category.id)).toBeTruthy();
    })

    test("getter of name prop", () => {
        const category = new Category({ name: "Movie" });
        expect(category.name).toBe("Movie");
    })

    test("getter and setter of description prop", () => {
        let category = new Category({ name: "Movie" });
        expect(category.description).toBeNull();

        category = new Category({ name: "Movie" , description: "some description" });
        expect(category.description).toBe("some description")   
        
        category = new Category({ name: "Movie" });
        category["description"] = "other description";
        expect(category.description).toBe("other description");

        category["description"] = undefined;
        expect(category.description).toBeNull();

        category["description"] = null;
        expect(category.description).toBeNull();

    })

    test("getter and setter of is_active prop", () => {
        let category = new Category({ name: "Movie" })
        expect(category.is_active).toBeTruthy();

        category = new Category({ name: "Movie", is_active: true });
        expect(category.is_active).toBeTruthy();

        category = new Category({ name: "Movie", is_active: false });
        expect(category.is_active).toBeFalsy();
    })

    test("getter of created_at prop", () => {
        let category = new Category({ name: "Movie" })
        expect(category.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({ name: "Movie", created_at })
        expect(category.created_at).toBe(created_at); 
    })
})